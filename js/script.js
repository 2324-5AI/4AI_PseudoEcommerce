/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html, js e php in modo tale da:

    - Modificare in modo opportuno i file PHP in modo che filtrino il dato richiesto da javascript 
        #in base ad un parametro bisogna scegliere se ritornare un solo ordine oppure tutti

        #il javascript potrà ricevere SOLO oggetti json formati 
            1) dagli attributi cod (codice di errore -1 o 0) e desc (descrizione da eventualmente stampare in console)
            2) altri oggetti a vostra scelta


    - visualizzare DINAMICAMENTE gli ORDINI in modo da ottenere delle card come negli esempi:
        # ogni ordine è un nuovo article
        # ogni ordine in base a se è arrivato oppure no dovrà essere raffigurato tramite l'icona corretta (vedi esempio)
        # sotto l'icona dovrà essere rafficurato il codice dell'ordine e la data di invio dell'ordine
        # sarà necessario in modo opportuno gestire la visualizzazione dei dettagli dell'ordine al click sulla card
        # gli ordini devono essere visualizzati in ordine di cronologico (dal pià recente al più lontano)

    - al click sulla card dovrà aprirsi una finestra (già preparata da me)
        # modificare i dati (articoli dell'ordine e data prevista di arrivo) prendendoli dal server
        #calcolare il totale dei costi sul momendo tenendo conto del costo dell'articolo e della quantità acquistata
        # se non vi è data di arrivo perché non è ancora arrivato generare una data casuale superiore alla data di ordine
    
    - CONTA POCHISSIMO. Aggiungere una combobox per la scelta di un articolo e con un bottone aggiungere un nuovo "ordine" 
        lato client mediante l'inserimento di una card senza evento click.
    
    NOTA. Non è possibile fare cache dei dati in array, è possibile salvare i codici nella pagina web, 
            tutto il resto deve essere prelevato dal server

*/


/**
 *  1) Sostituisci i dati precedenti (articoli dell'ordine e data prevista di arrivo) 
        prendendo i nuovi dati in modo opportuno dal server. 
    2) Poi visualizza sfondoDivDettagli portando display a "flex"
 * @param cod = Codice dell'ordine di cui visualizzare i dati
 */
function vis(cod){
}

/**
 * NASCONDI sfondoDivDettagli
 */
function chiudi(){
}