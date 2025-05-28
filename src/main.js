const firstName= document.getElementById("firstname")
const submitButton = document.getElementById('submit-button')
const resultsAppear= document.getElementById('results')

  async function getResult() {
    if(!firstName.value){
      console.log('please provide a name')
      return 
    }
    try {
      const response = await fetch(`https://api.nationalize.io/?name=${firstName.value}`) 
      const result = await response.json();
      const {country,name}=result
      const { country_id,probability}=country[0]
      var getCountryNames = new Intl.DisplayNames(['en'], {type: 'region'});
       resultsAppear.innerText = name  + `is from `+ getCountryNames.of(country_id)+ "acertainity of "+ Math.floor (probability*100)

    } catch (error) {
      resultsAppear.innerText= "An error occurred,try again"
      console.log(error)
    }
    
  }
    
  
submitButton.addEventListener('click',async (e)=>{await getResult()})