declare module 'react-speech-recognition' {
    export interface SpeechRecognitionOptions {
        continuous?: boolean;
        interimResults?: boolean;
        lang?: string;
    }

    export interface UseSpeechRecognitionOptions {
        transcribing?: boolean;
        clearTranscriptOnListen?: boolean;
        commands?: any[];
    }

    export interface SpeechRecognition {
        startListening: (options?: SpeechRecognitionOptions) => Promise<void>;
        stopListening: () => void;
        abortListening: () => void;
        browserSupportsSpeechRecognition: boolean;
        getRecognition: () => SpeechRecognition;
        applyPolyfill: (polyfill: any) => void;
    }

    export interface UseSpeechRecognition {
        transcript: string;
        interimTranscript: string;
        finalTranscript: string;
        listening: boolean;
        resetTranscript: () => void;
    }

    export const useSpeechRecognition: (
        options?: UseSpeechRecognitionOptions
    ) => UseSpeechRecognition;
    export const SpeechRecognition: SpeechRecognition;

    export default SpeechRecognition;
}
