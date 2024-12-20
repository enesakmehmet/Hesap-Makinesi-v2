// Ekrana değer ekleme
function append(value) {
    document.getElementById('result').value += value;
}

// Hesaplama yapma
function calculate() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Hata';
    }
}

// Ekranı temizleme
function clearResult() {
    document.getElementById('result').value = '';
}
