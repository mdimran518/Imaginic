import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-imaginic-ai',
  standalone: false,
  templateUrl: './imaginic-ai.html',
  styleUrl: './imaginic-ai.scss'
})
export class ImaginicAi implements AfterViewInit {
  isInputFocused = false;
  @ViewChild('waveCanvas') waveCanvas!: ElementRef<HTMLCanvasElement>;
  text = '';
  isModalVisible = false;
  recognition: any;
  audioContext: AudioContext | null = null;
  analyser: AnalyserNode | null = null;
  dataArray!: Uint8Array;
  animationId: number | null = null;






  constructor(private ngZone: NgZone, private chatService: ChatService) { }

  ngAfterViewInit() { }

  openModal() {
    this.isModalVisible = true;
    this.startListening();
  }

  closeModal() {
    this.isModalVisible = false;
    this.stopListening();
  }

  startListening() {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    console.log('SpeechRecognition:', SpeechRecognition);
    if (!SpeechRecognition) {
      console.error('Speech Recognition API is not supported in this browser.');
      return;
    }
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onresult = (event: any) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      this.ngZone.run(() => {
        this.text = transcript;
        console.log('Transcript:', this.text);
      });
    };

    this.recognition.start();
    this.startWaveAnimation();
  }

  stopListening() {
    this.recognition?.stop();
    this.stopWaveAnimation();
    this.closeModal();
  }

  startWaveAnimation() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const source = this.audioContext!.createMediaStreamSource(stream);
      this.analyser = this.audioContext!.createAnalyser();
      source.connect(this.analyser);
      this.analyser.fftSize = 256;

      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);

      const canvas = this.waveCanvas.nativeElement;
      const canvasCtx = canvas.getContext('2d')!;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const draw = () => {
        this.animationId = requestAnimationFrame(draw);
        this.analyser!.getByteFrequencyData(this.dataArray);

        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = 3;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          const barHeight = this.dataArray[i] / 2;
          canvasCtx.fillStyle = '#00ffcc';
          canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        }
      };

      draw();
    });
  }

  stopWaveAnimation() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.audioContext?.close();
    this.audioContext = null;
  }
  predefinedPrompts = [
    { icons: 'bi-buildings', prompt: 'Create a futuristic cityscape with flying cars and neon lights.' },
    { icons: 'bi-image', prompt: 'Generate a serene landscape with mountains, a river, and a sunset.' },
    { icons: 'bi-stars', prompt: 'Design a character from a fantasy world with magical powers.' },
    { icons: 'bi-camera', prompt: 'Capture a vibrant street market scene with colorful stalls and people.' }
  ];


  question: string = '';
  answer: string = '';
  isLoading: boolean = false;
  // / Modern approach (recommended for Angular 15+)
  sendQuestion() {
    if (!this.question.trim()) {
      this.answer = 'Please enter a question';
      return;
    }

    // Show loading state
    this.answer = 'Loading...';

    this.chatService.askGemini(this.question).subscribe({
      next: (res) => {
        this.answer = res.answer || 'No response received';
      },
      error: (err) => {
        console.error('Error:', err);
        this.answer = 'Error fetching response. Please try again.';
      }
    });
  }

  // Alternative with loading state and better UX
  sendQuestionWithLoading() {
    if (!this.question.trim()) {
      this.answer = 'Please enter a question';
      return;
    }

    this.isLoading = true; // Add this property to your component
    this.answer = '';

    this.chatService.askGemini(this.question).subscribe({
      next: (res) => {
        this.answer = res.answer || 'No response received';
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.answer = 'Error fetching response. Please try again.';
        this.isLoading = false;
      }
    });
  }

  // If you need to use the older syntax (Angular < 15)
  sendQuestionOldSyntax() {
    if (!this.question.trim()) {
      this.answer = 'Please enter a question';
      return;
    }

    this.chatService.askGemini(this.question).subscribe(
      res => {
        this.answer = res.answer || 'No response received';
      },
      err => {
        console.error('Error:', err);
        this.answer = 'Error fetching response. Please try again.';
      }
    );
  }
}
