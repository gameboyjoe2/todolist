const DataArray = [];

let addTaskElement = document.getElementById('addTask');
let addbuttonElement = document.getElementById('addButton');
let viewbuttonElement = document.getElementById('viewTask')
let viewOutputElement = document.getElementById("viewOutput");
let updateInputElement = document.getElementById('updateTask');


const addTask = addbuttonElement.addEventListener('click', () => {
    const inputValue = addTaskElement.value;
    DataArray.push(inputValue);
    addTaskElement.value = '';
    viewOutputElement.innerHTML = '';

    const taskList = document.createElement('ul');

    DataArray.forEach((task, index) => {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "delete";
        deleteButton.addEventListener('click', () => {
            DataArray.splice(index,1);
            if (DataArray.length === 1){
                DataArray = [];
            }
            console.log(DataArray, DataArray.length);
            listItem.remove();
        });
        const updateButton = document.createElement('button')
        updateButton. textContent = "update";

        updateButton.addEventListener('click', () => {
            console.log(listItem.textContent)
            //updateInputElement.value become the updated value in the array
            console.log(DataArray.at(index))
            DataArray[index] = updateInputElement.value;


            
            // get value from update box
            // listItem.textContent = value of update box
            listItem.textContent = updateInputElement.value; 
            listItem.append(deleteButton)
            listItem.append(updateButton)
        });

        listItem.textContent = /*`${index + 1}.*/` ${task}`;
        listItem.append(deleteButton);
        listItem.append(updateButton);

        taskList.appendChild(listItem);

    })
    console.log(taskList)
    viewOutputElement.appendChild(taskList)
});

// const viewTask = viewbuttonElement.addEventListener('click', () => {

// });