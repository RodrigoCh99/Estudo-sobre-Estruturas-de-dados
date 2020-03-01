// Algoritmo [1.1]:
// Implementação do Algoritmo de inversão sequencial:

var sequencia = [ '1º', '2º', '3º', '4º', '5º', '6º' ]

for ( i=0; i <= (sequencia.length/2) ; i++ ) {

    var inversor

    inversor = sequencia[i]

    sequencia[i] = sequencia[ (sequencia.length - 1) - i ]

    sequencia[ (sequencia.length - 1) - i ] = inversor

}

console.log(sequencia)

// Algoritmo [1.2]:
// Implementação do Fatorial recursivo:

function fatorial( num ) {

    if (num <= 1) {

        return 1

    } else {

        return num * fatorial(num - 1)

    }
}

// Algoritmo [1.3]:
// Implementação do Fatorial não recursivo:

function fatorial2(num) {

    numeros = []

    for (i=1; i <= num; i++) {

        numeros.push(i)

    }

    //console.log(numeros)

    var resposta = numeros[ numeros.length - 1]

    for (i = (numeros.length - 2); i >= 0; i--) {

        //console.log('resposta ->', resposta)

        //console.log('i ->', i)

        if (i === 0 ) {

            return resposta

        } else {

            resposta *= numeros[i]

        }

    }

}

// Algoritmo [1.4]:
// Implementação do algoritmo da torre de Hanói:

function Hanoi(n, pino_inicial, pino_final, pino_intermediario) {

    if (n === 1) {

        console.log('mova o disco 1 do '+ pino_inicial + ' para o pino ' + pino_final)
        return 
    }

    Hanoi(n-1, pino_inicial, pino_intermediario, pino_final)

    console.log('mova o disco ' + n + ' do '+ pino_inicial + ' para o pino ' + pino_final)

    Hanoi(n-1, pino_intermediario, pino_final, pino_inicial)

}

// Algoritmo [1.5]:
// Implementação da Soma de Matrizes:

var matriz1 = [
  [1, 2, 3 ],
  [4, 5, 6 ],
  [7, 8, 9 ]
]

var matriz2 = [
  [1, 2, 3 ],
  [4, 5, 6 ],
  [7, 8, 9 ]
]

function SomaMatrizes( m1, m2 ) {

    var resposta = []

    for (vetor = 0; vetor < ( m1.length ); vetor++) {

        var subresposta = []

        for(item = 0; item < (m1[vetor].length); item++ ) {

            subresposta.push(m1[vetor][item] + m2[vetor][item])

        }

        resposta.push(subresposta)
    }

    return resposta
}

// Algoritmo [1.6]:
// Implementação da Multiplicação de Matrizes:

var matriz1 = [
    [1, 2, 3 ],
    [4, 5, 6 ],
    [7, 8, 9 ]
]
  
  var matriz2 = [
    [1, 2, 3 ],
    [4, 5, 6 ],
    [7, 8, 9 ]
]

function MultiplicaMatriz( m1, m2 ) {

    var resposta = []

    for (vetor = 0; vetor < (m1.length); vetor++ ) {

        var subresposta = []

        for (item=0; item < (m1[vetor].length); item++) {

            subresposta.push(m1[vetor][item]* m2[item][vetor])

        }

        resposta.push(subresposta)

    }

    return resposta

}

// Algoritmo [2.1]:
// Implementação da Busca de um elemento na lista " L ":

var L = [ 1, "aaa", true, []  ]

function BuscaL(elemento, lista) {

    var i = 0

    while( i <= lista.length ) {

        if ( lista[i] === elemento ) {

            return i

        }

        i++
    }

    return 'elemento não encontrado'

}

// Algoritmo [2.2]:
// Outra implementação da Busca de um elemento na lista " L ":

var lista = [7,12, 22, 36, 14 ] 

function BuscaL2(elemento, lista) {

    lista[lista.length] = elemento

    console.log('Lista =>', lista)

    var i = 0

    while ( lista[i] !== elemento ) {

        console.log('i ->', i)

        console.log('lista[i] ->', lista[i])

        if (lista[i] === elemento) {

            break 

        }

        i ++

    }

    if ( i !== (lista.length + 1) ) {

        return i

    } else {

        return 'Elemento não encontrado'

    }


}

// Algoritmo [2.3]:
// Busca de um elemento na lista " L " ordenada:

var ListaOrdenada = [1,2,3,4,5,6,7,8,9]

function BuscaOrd(elemento, lista) {

    lista[lista.length] = elemento

    var i = 0

    while ( lista[i] < ( lista[lista.length - 1] ) ) {

        // console.log(i)

        // console.log('I ->', i)
        // console.log('lista[ lista.length -1 ] ->', lista[ lista.length -1 ])

        i++

    }

    if ( i === lista[ lista.length -1 ] || lista[i] !== elemento ) {

        return 0

    } else {

        return i

    }

}

console.log(BuscaOrd(7, ListaOrdenada))

// Algoritmo [2.4]:
// Busca Binária.

var ListaOrdenada = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function BuscaBin(elemento, lista) {

    var inicio = 0

    var final = lista.length 

    var BuscaBin = 0

    while ( inicio < final ) {

        var meio = Math.round( (inicio + final) / 2 )

        // console.log('Inicio ->', inicio)
        // console.log('Final ->', final)
        // console.log('meio ->', meio)
        // console.log('lista[meio] ->', lista[meio])

        if ( lista[meio] === elemento ) {

            return meio

        } else if ( lista[meio] < elemento ) {

            inicio = (meio + 1)

        } else {

            final = (meio - 1)

        }

    }

    return 'Elemento não encontrado'

}

console.log(BuscaBin(10, ListaOrdenada))



// Algoritmo [2.5]:
// Inserção de um nó na lista L.

var Lista = [2, 1, 4, 10, 6, 15, 0, 9]

function InserirItem( novoElemento, Lista) {

    for (i=0;  i < Lista.length; i++ ) {

        if ( BuscaL( novoElemento, Lista ) === 'elemento não encontrado' ) {

            Lista[Lista.length] = novoElemento

            return 'novo_elemento inserido'

        } else {

            return 'elemento já existe na lista'

        }
    }
}

console.log(InserirItem(14, Lista))


// Javascript não possui nativamente uma tupla imutavel para que se possa aplicar
// o conceito de overflow, o exemplo acima é meramete ilustrativo. pense que em algumas
// linguagens não é possivel adicionar elementos a listas e fazer seus valores crescerem.
// o array nessas linguagens se for defindo com 20 espaços terá 20 espaços!


// Algoritmo [2.6]:
// Remoção de um nó na lista L.

var Lista = [2, 1, 4, 10, 6, 15, 0, 9, 14]

function RemoverItem(elemento, Lista) {

    for ( i=0; i < Lista.length; i++ ) {
  
      console.log('I ->', i)
  
      var indice = BuscaL(elemento, Lista)
  
      if ( indice !== 'elemento não encontrado' ) {
    
            for ( i=indice; i < Lista.length; i++ ) {
    
                Lista[i] = Lista[i + 1]
    
            }
    
            Lista.length = Lista.length - 1
    
            return 'item removido'
  
        } else {
          
            return 'elemento não encontrado na tabela!'
  
        }

    }

    return 'Lista vazia'
}

console.log(RemoverItem(14, Lista))

// Algoritmo [2.7]:
// Inserção de um nó na Pilha P.


var P = []

function InserirItemPilha(elemento, pilha) {

    var topo = pilha.length - 1

    if ( topo !== pilha.length ) {

        topo += 1

        pilha[topo] = elemento

        return 'elemento inserido na pilha'

    }
}

console.log(InserirItemPilha('novo_elemento', P))

// Algoritmo [2.8]:
// Remoção de um nó na Pilha P.

var P = ["primeiro_elemento", "segundo_elemento", "terceiro_elemento"]

function RemoverItemPilha( pilha ) {

    var topo = pilha.length

    console.log('topo ->', topo)

    if ( topo !== 0 ) {

        var nova_pilha = pilha.slice(0, topo)

        pilha = nova_pilha

        console.log('Pilha =>', pilha)

        return pilha

    }

}

console.log(RemoverItemPilha( P ) )


