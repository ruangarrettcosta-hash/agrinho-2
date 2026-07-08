function atualizarLaboratorio() {
    // Pegando valores atuais dos controles deslizantes (sliders)
    const prodVal = parseInt(document.getElementById('range-producao').value);
    const consVal = parseInt(document.getElementById('range-consumo').value);

    // Atualizando os textos pequenos abaixo dos sliders
    document.getElementById('val-producao').innerText = prodVal + '%';
    document.getElementById('val-consumo').innerText = consVal + '%';

    // Capturando o elemento do painel de resultado
    const card = document.getElementById('status-card');
    const icon = document.getElementById('status-icon');
    const label = document.getElementById('status-label');
    const text = document.getElementById('status-text');

    // Reseta as classes de estado anteriores
    card.className = "status-card";

    // Cálculo matemático da diferença do equilíbrio
    const diferenca = prodVal - consVal;

    if (Math.abs(diferenca) <= 15) {
        // Cenário 1: Produção e consumo alinhados (Margem de tolerância de 15 pontos)
        card.classList.add('em-equilibrio');
        icon.innerText = "⚖️";
        label.innerText = "Balança Estável";
        text.innerText = "Excelente! A capacidade produtiva industrial caminha lado a lado com a demanda da população, gerando menor volume de obsolescência.";
    } 
    else if (diferenca > 15) {
        // Cenário 2: Produzindo muito mais do que consome (Desperdício)
        card.classList.add('escassez');
        icon.innerText = "🏭";
        label.innerText = "Superprodução Crítica";
        text.innerText = "As indústrias estão operando em velocidade excessiva para o mercado atual. Risco iminente de obsolescência programada, acúmulo de estoques e poluição fabril desnecessária.";
    } 
    else {
        // Cenário 3: Consumindo muito mais do que produz (Esgotamento / Escassez de recursos)
        card.classList.add('colapso');
        icon.innerText = "🚨";
        label.innerText = "Déficit Ecológico";
        text.innerText = "Consumismo desenfreado! A busca rápida por mercadorias força a extração de matérias-primas acima da taxa de regeneração biológica da Terra.";
    }
}
