
import icon1 from '../assets/image/cocktail-1.jpg'
import icon2 from '../assets/image/cocktail-2.jpg'
import icon3 from '../assets/image/cocktail-3.jpg'

export const typeJuice=
{
    All:'All',
   Oats:'Oats',
    Smoothies:'Smoothies'
}

let story=
{
   initialState:
        {
          items:[
              {id:0,srcIcon:icon2,name:'Strawberry Zen',type:typeJuice.Smoothies,colOverStars:'5',
                  firstClick:false,colEmptyStars:0,colCheckedJuice:1},
              {id:1,srcIcon:icon3,name:'Blue Cacao',type:typeJuice.Smoothies,colOverStars:4,
                  firstClick:false,colEmptyStars:1,colCheckedJuice:1},
              {id:2,srcIcon:icon2,name:'Tea',type:typeJuice.Oats,colOverStars:4,
                  firstClick:false,colEmptyStars:1,colCheckedJuice:1},
              {id:3,srcIcon:icon3,name:'Hazy Coco',type:typeJuice.Smoothies,colOverStars:4,
                  firstClick:false,colEmptyStars:1,colCheckedJuice:1},
              {id:4,srcIcon:icon1,name:'Rise & Chai',type:typeJuice.Smoothies,colOverStars:2,
                  firstClick:false,colEmptyStars:3,colCheckedJuice:1},
              {id:5,srcIcon:icon1,name:'Hazy Coco',type:typeJuice.Smoothies,colOverStars:3,
                  firstClick:false,colEmptyStars:2,colCheckedJuice:1},
              {id:6,srcIcon:icon3,name:'Hazy Coco',type:typeJuice.Oats,colOverStars:4,
                  firstClick:false,colEmptyStars:1,colCheckedJuice:1},
              {id:7,srcIcon:icon1,name:'Rise & Chai',type:typeJuice.Oats,colOverStars:2,
                  firstClick:false,colEmptyStars:3,colCheckedJuice:1},
          ],
            AllChekedCups:0

        }

}


export default story;