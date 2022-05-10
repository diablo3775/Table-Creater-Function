/* Defining the tableCreate function */
function tableCreate(rows, cols, data, thead, tfoot) {
    // 1) Create table and body elements
    let table = document.createElement('table')
    let tableBody = document.createElement('tbody')
   
    // 2) Optional header
    let headContent = document.createElement('thead')
    let tr = document.createElement('tr')
   
    // 2.1) Sets default behavior: Single cell header
    if (thead && Array.isArray(thead) == false) {
      let td = document.createElement('td')
      td.innerHTML = thead // Set header text to argument input
      td.setAttribute('colspan', cols) // Span header for as many cols as table
      tr.append(td)
   
      headContent.append(tr) // append head row to thead element
      thead = headContent // Make this final value of thead
    }
    // 2.2) If "split" is third argument: Creates a multi-cell header
    if (Array.isArray(thead)) {
      let i
      for (i = 0; i < cols; i++) {
        let td = document.createElement('td')
        td.id = 'thead' + i
        td.innerHTML = thead[i]
        tr.append(td) // append multiple td to head row
      }
      headContent.append(tr) // append head row to thead element
      thead = headContent // Make this final value of thead
    }
   
    // 3) Optional footer (text is user input string)
    if (tfoot) {
      footElement = document.createElement('tfoot')
      tr = document.createElement('tr')
      td = document.createElement('td')
      td.innerHTML = tfoot // Set text to fourth argument input
      td.setAttribute('colspan', cols)
      tr.append(td) // Append single cell to row
      footElement.append(tr) // Append row to tfoot element
      tfoot = footElement // Make this final value of tfoot
    }
   
    // 4) Create table body rows and cell with loops
    let i
    for (i = 0; i < rows; i++) {
      // Loop to create row
      let tr = document.createElement('tr')
   
      let id = i * cols // Nested loop to append cells to rows (first loop id = 0*5; second loop id = 1*5, etc)
      for (j = 0; j < cols; j++) {
        let td = document.createElement('td')
        id++ // increase id by 1 (first loop is 0+1 = 1)
        if (id == i * cols + 1) {
          td.classList.add('left-col')
        }
        td.innerHTML = id // print id in col cell
        td.setAttribute('id', 'cell' + id) // set id of element to id
        tr.append(td) // append col cell to table row
        // Repeats until j < column numbers entered by user
   
        if (data) {
          td.innerHTML = data[id - 1]
        }
      }
   
      tableBody.append(tr)
    }
   
    // 5) Append head, body and footer
    if (thead) {
      table.append(thead)
    }
    table.append(tableBody)
    if (tfoot) {
      table.append(tfoot)
    }
   
    // Show table in console
    console.log(table)
   
    // 6) Return a value for the function
    return table
  }