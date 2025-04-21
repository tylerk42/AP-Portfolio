var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/College%20Majors%20%26%20Incomes.csv"
var major= getColumn(url,2)
var majorcategory= getColumn(url,6)
var averageincome= getColumn(url,11)

function getsalary(category){
var output=[]
    for(var i=0;i<major.length;i++){
        if(category==majorcategory[i]){
            output.push(major[i]+": $"+averageincome[i])
        }
    }

document.getElementById("output").innerHTML=output.join("<br></br>")
}


