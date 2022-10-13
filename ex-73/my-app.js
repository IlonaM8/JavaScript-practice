const buttonEl = document.querySelector('button');



function addRow(){

    buttonEl.style.backgroundColor = 'pink';

    let table = document.getElementById('person-table');
    let tbBody = document.querySelector('tbody');

    for (let i = 0; i< 1; i++){
        let row = document.createElement('tr');

        for (let j = 0; j < 1; j++){
            let cell = document.createElement('td');
            let celltext1 = document.createTextNode(` firstName`);
            // let celltext2 = document.createTextNode(` lastName `);
            // let celltext3 = document.createTextNode(` age `);

            cell.appendChild(celltext1);
            // cell.appendChild(celltext2);
            // cell.appendChild(celltext3);
            row.appendChild(cell);
        }

        //second
        for (let r = 0; r < 1; r++){
            let cell = document.createElement('td');
            let celltext2 = document.createTextNode(` lastName`);
            cell.appendChild(celltext2);
            row.appendChild(cell);
        }

        //third one
        for (let g = 0; g < 1; g++){
            let cell = document.createElement('td');
            let celltext3 = document.createTextNode(`age`);
            cell.appendChild(celltext3);
            row.appendChild(cell);
        }


        tbBody.appendChild(row);

    }

    table.appendChild(tbBody);

    document.body.appendChild(table);

    table.setAttribute('border', '2');

}


buttonEl.onclick = addRow;