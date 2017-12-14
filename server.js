var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/castoro')

var PromoItem = require('./model/promo');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));





app.get('/',function(request,response){
    response.send('My API');
});


app.get('/promoAll',function(request,response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    PromoItem.find({},function(err,promoItems){
      if(err){
        response.status(500).send({error:"Could not fetch promos"});
      }else{
        response.send(promoItems);
      }
    });
});


app.get('/promoComida',function(request,response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    PromoItem.find({category:"Comida"},function(err,promoItems){
      if(err){
        response.status(500).send({error:"Could not fetch promos"});
      }else{
        response.send(promoItems);
      }
    });
});

app.get('/promoProductos',function(request,response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    PromoItem.find({category:"Productos"},function(err,promoItems){
      if(err){
        response.status(500).send({error:"Could not fetch promos"});
      }else{
        response.send(promoItems);
      }
    });
});

app.get('/promoBellesa',function(request,response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    PromoItem.find({category:"Bellesa"},function(err,promoItems){
      if(err){
        response.status(500).send({error:"Could not fetch promos"});
      }else{
        response.send(promoItems);
      }
    });
});

app.get('/promoSalud',function(request,response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    PromoItem.find({category:"Salud"},function(err,promoItems){
      if(err){
        response.status(500).send({error:"Could not fetch promos"});
      }else{
        response.send(promoItems);
      }
    });
});

app.get('/promoServicios',function(request,response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    PromoItem.find({category:"Servicios"},function(err,promoItems){
      if(err){
        response.status(500).send({error:"Could not fetch promos"});
      }else{
        response.send(promoItems);
      }
    });
});

app.get('/promoDivercion',function(request,response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    PromoItem.find({category:"Divercion"},function(err,promoItems){
      if(err){
        response.status(500).send({error:"Could not fetch promos"});
      }else{
        response.send(promoItems);
      }
    });
});


//No funciona- Incomplete
app.put('/promoEdit/:promoID',function(request,response){
    

    var newImgUrl = request.body.imgUrl;
    
    if ( !newImgUrl || newImgUrl ===""){
       response.status(500).send({error: "must provide promo text"})
       }else{
           for (var x = 0; x< allPromos.length;x++){
               var pro = allPromos[x];
               
               if(pro.id === request.params.promoID){
                   allPromos[x].imgUrl = newImgUrl;
                   break;
               }
           }
           response.send(allPromos);
           
       }
});



app.post('/promo', function(request, response){
  var promo = new PromoItem();
  promo.category = request.body.category;
  promo.description = request.body.description;
  promo.name = request.body.name;
  promo.imgUrl = request.body.imgUrl;
  promo.save(function(err, savedPromo){
    if(err){
      responde.status(500).send({error:"Could not save promo"});
    }else{
      response.status(200).send(savedPromo);
    }
  });
});


app.listen(3010,function(){
    console.log('API Runing on port 3010');
});
