export default function Form ({request, setInput}){


    return (
        <div className="formulario">
            <h1>
                BUSCAR CLIMA DA CIDADE ...
            </h1>
        <form>
            <input 
                type="text" 
                onChange={e=>setInput(e.target.value)}
                placeholder="Ex: Rio de Janeiro"
                id="inputCidade"
            />
            <input
            id="submit"
                type="submit"
                value="Buscar"
                onClick={request}
            />
        </form>
        </div>
    )
}