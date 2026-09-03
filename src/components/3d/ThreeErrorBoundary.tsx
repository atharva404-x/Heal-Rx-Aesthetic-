import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ThreeErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Gracefully catch WebGL / Canvas context failures in production
    console.warn('Three.js / WebGL canvas initialized with error, falling back to static poster:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.fallbackContent;
    }
    return this.props.children;
  }

  private get fallbackContent() {
    return this.props.fallback;
  }
}
