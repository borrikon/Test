var table = document.getElementsByTagName('table')
var listCollection = Object.values(table)[6]
var list = listCollection.getElementsByTagName('tr');

Object.values(list).map((item, i) => {
     if(i === 0 ){
        list[i+2].style.display = 'none'
     }else if(i%3 === 0){
        list[i-1].style.display = 'none'
      }
})