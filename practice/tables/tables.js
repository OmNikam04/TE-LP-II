function buildTable(rows, cols, startValue, table){

    for(let i=0; i<rows; i++){
        var row = table.insertRow(i)
        for(let j = 0; j<cols; j++){
            var cell = row.insertCell(j)
            if(i==0)
                cell.textContent = startValue++
            else
                cell.textContent = parseInt(table.rows[0].cells[j].textContent) * (i+1)
        }
    }
}

const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inp1 = document.getElementById('inp1').value
    const inp2 = document.getElementById('inp2').value
    const x = inp1.split('#').map(Number)
    const y = inp2.split('#').map(Number)
    console.log(x)
    console.log(y)
    const t1 = document.getElementById('t1')
    const t2 = document.getElementById('t2')
    const t3 = document.getElementById('t3')
    buildTable(x[0], x[1], x[2], t1)
    buildTable(y[0], y[1], y[2], t2)

    // if row and col are same then we can print the thrid  table
    if(x[0] === y[0] && x[1] === y[1]){
        if(x[2] === y[2]){
            buildTable(y[0], y[1], y[2], t3)
        }
        else{
            for(let i =0; i<x[0]; i++){
                var row = t3.insertRow(i)
                for(let j = 0; j<x[1]; j++){
                    let a = t1.rows[i].cells[j].textContent
                    let b = t2.rows[i].cells[j].textContent
                    var cell = row.insertCell(j)
                    cell.textContent = parseInt(a) * parseInt(b)
                }
            }
        }
    }
    else{
        // remove the result table
    }
})