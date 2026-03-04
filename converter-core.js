(function (globalFactory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = globalFactory();
  } else if (typeof window !== 'undefined') {
    window.ConverterCore = globalFactory();
  }
})(function createConverterCore() {
  function normalizeHex(hex) {
    return String(hex).replace(/0x/gi, '').replace(/[^a-fA-F0-9]/g, '');
  }

  function hexToAscii(hexString) {
    const clean = normalizeHex(hexString);

    if (!clean.length) return '';
    if (clean.length % 2 !== 0) {
      throw new Error('Hex 길이가 홀수입니다. 2자리씩 입력해 주세요.');
    }

    let result = '';
    for (let i = 0; i < clean.length; i += 2) {
      const value = parseInt(clean.substring(i, i + 2), 16);
      result += String.fromCharCode(value);
    }

    return result;
  }

  function asciiToHex(text) {
    return Array.from(String(text))
      .map((char) => char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0'))
      .join(' ');
  }

  return {
    normalizeHex,
    hexToAscii,
    asciiToHex,
  };
});
