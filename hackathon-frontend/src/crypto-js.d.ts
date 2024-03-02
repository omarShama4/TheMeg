declare module 'crypto-js' {
    const SHA256: {
      (text: string): { toString: () => string };
    };
  
    // Add other CryptoJS functions here as needed
  
    export { SHA256 };
  }
  