function checkFakeNews() {
    var news = document.getElementById("newsInput").value.toLowerCase();
    var fakeExamples = ["noticia falsa", "rumor viral", "información errónea"];
    
    if (fakeExamples.some(example => news.includes(example))) {
        document.getElementById("result").innerText = "⚠️ Esta noticia podría ser falsa. Consulta fuentes verificadas.";
    } else {
        document.getElementById("result").innerText = "✅ No se detectaron señales de desinformación.";
    }
}
