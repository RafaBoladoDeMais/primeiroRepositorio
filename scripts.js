function Calculadora( display ){

    const saidaDados = display;
    this.inicia = () => {
        cliqueBotoes();
        enterPress();
    }


    const cliqueBotoes = () => {

        document.addEventListener( 'click', (e) => {
            const el = e.target;
            if( el.classList.contains('btn-num') ){
                mostrarDados(el.innerText);
            }
            if( el.classList.contains('btn-clear') ){
                limparDisplay();
            }
            if( el.classList.contains('btn-del') ){
                deletarUm();
            }
            if( el.classList.contains('btn-eq') ){
                realizarConta();
            }
            saidaDados.focus();
        } );
        
    }

    //funcoes
    const mostrarDados = (valor)=> {
        saidaDados.value += valor;
    }
    const limparDisplay = () => {
        saidaDados.value = ' ';
    }
    const deletarUm = () => {
        saidaDados.value = saidaDados.value.slice(0, -1);
    }
    const realizarConta = () => {
        try{
            const conta = eval(saidaDados.value);
            if( !conta ){
                alert('Conta invalida');
                saidaDados.value = ' ';
                return;
            }
            saidaDados.value = conta;

        }catch(e){
            alert('conta invalida');
            saidaDados.value = ' ';
            return;
        }    

    }
    const enterPress = () => {
        saidaDados.addEventListener('keypress', (e) => {

            if( e.keyCode ===  13){
                realizarConta();
            }
        });
    }



}

const display = document.querySelector('.entrada-dados');
const calculadora = new Calculadora(display);
calculadora.inicia();
