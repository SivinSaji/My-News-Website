const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
const moment = require('moment')
const math = require('math')
newsRouter.get('', async(req,res)=>{
   // res.render('news')


   try{
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=81616514c8534374bf15ce029ff96550';

  const newsAPI =await axios.get(url)
  res.render('news',{articles : newsAPI.data.articles})
   }catch(err){
      if(err.respo){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else if(err.requiest){
           console.log(err.requiest)
           
      } else{
        console.log('Error',err.message);
        
      }
   }

})
/*
newsRouter.get('/search',async(req,res)=>{

  var search=req.query.name;
  console.log(search);
  console.log("oooooooooooooooooooooooooo   erjeggen bg");
  try{
    var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=81616514c8534374bf15ce029ff96550`

    const newsAPI =await axios.get(url)
    res.render('news',{articles:newsAPI.data.articles})
  } catch (error) {
    if(error.response){
        console.log(error)
    }

}
})*/
newsRouter.post('/search',async(req,res)=>{
 
  search = req.body.search;


  try {
      var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=81616514c8534374bf15ce029ff96550`

      const news_get =await axios.get(url)
      res.render('news',{articles:news_get.data.articles})





  } catch (error) {
      if(error.response){
          console.log(error)
      }

  }
})

newsRouter.get('/news/:category',async(req,res)=>{
  var category = req.params.category;
  try{
    var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=81616514c8534374bf15ce029ff96550';

    const newsAPI =await axios.get(url)
    res.render('category',{articles:newsAPI.data.articles})
  }catch(error){
    if(error.response){
      console.log(error);
    }
  }
})

module.exports = newsRouter