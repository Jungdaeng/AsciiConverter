const modeSelect = document.getElementById('mode');
const inputLabel = document.getElementById('inputLabel');
const outputLabel = document.getElementById('outputLabel');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const swapBtn = document.getElementById('swapBtn');
const copyBtn = document.getElementById('copyBtn');
const statusEl = document.getElementById('status');

const { hexToAscii, asciiToHex } = window.ConverterCore;

function setStatus(message, type = '') {
  statusEl.textContent = message;
  statusEl.className = `status ${type ? `status--${type}` : ''}`.trim();
}

function updateLabels() {
  const hexToAsciiMode = modeSelect.value === 'hexToAscii';
  inputLabel.textContent = hexToAsciiMode ? 'Hex 입력' : 'ASCII 입력';
  outputLabel.textContent = hexToAsciiMode ? 'ASCII 결과' : 'Hex 결과';
  inputText.placeholder = hexToAsciiMode ? '예: 48 65 6C 6C 6F' : '예: Hello';
  outputText.placeholder = '변환 결과가 여기에 표시됩니다';
}

function convert() {
  try {
    const source = inputText.value;
    const result = modeSelect.value === 'hexToAscii' ? hexToAscii(source) : asciiToHex(source);
    outputText.value = result;
    setStatus('변환이 완료되었습니다.', 'ok');
  } catch (error) {
    outputText.value = '';
    setStatus(error.message, 'error');
  }
}

function swapMode() {
  modeSelect.value = modeSelect.value === 'hexToAscii' ? 'asciiToHex' : 'hexToAscii';
  const oldInput = inputText.value;
  inputText.value = outputText.value;
  outputText.value = oldInput;
  updateLabels();
  setStatus('입력/출력 방향이 스왑되었습니다.');
}

async function copyResult() {
  if (!outputText.value) {
    setStatus('복사할 결과가 없습니다.', 'error');
    return;
  }

  try {
    await navigator.clipboard.writeText(outputText.value);
    setStatus('결과가 클립보드에 복사되었습니다.', 'ok');
  } catch (_error) {
    setStatus('복사 권한이 없어 실패했습니다. 수동 복사해 주세요.', 'error');
  }
}

convertBtn.addEventListener('click', convert);
clearBtn.addEventListener('click', () => {
  inputText.value = '';
  outputText.value = '';
  setStatus('입력/결과가 초기화되었습니다.');
});
swapBtn.addEventListener('click', swapMode);
copyBtn.addEventListener('click', copyResult);
modeSelect.addEventListener('change', () => {
  outputText.value = '';
  updateLabels();
  setStatus('변환 모드가 변경되었습니다.');
});

updateLabels();
