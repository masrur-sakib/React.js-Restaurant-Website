const dummyData =[
    {   
        "id" : 1,
        "category":"breakfast",
        "name" : "Bagel And Cream Cheese",
        "img" : "https://i.ibb.co/pdfGzyp/breakfast1.png" ,
        "price": 12.00,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 2,
        "category":"breakfast",
        "name" : "Breakfast Sandwich",
        "img" : "https://i.ibb.co/8bJV04d/breakfast2.png" ,
        "price": 15,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 3,
        "category":"breakfast",
        "name" : "Baked Chicken",
        "img" : "https://i.ibb.co/xjkVyVZ/breakfast3.png" ,
        "price": 22,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 4,
        "category":"breakfast",
        "name" : "Eggs Benedict",
        "img" : "https://i.ibb.co/GPS1MS0/breakfast4.png" ,
        "price":16,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 5,
        "category":"breakfast",
        "name" : "Toast Croissant Fried egg",
        "img" : "https://i.ibb.co/brDv96s/breakfast5.png" ,
        "price": 8,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 6,
        "category":"breakfast",
        "name" : "Full Breakfast Fried Egg Toast Brunch",
        "img" : "https://i.ibb.co/WfVDMQ2/breakfast6.png" ,
        "price": 32,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 7,
        "category":"lunch",
        "name" : "Healthy Meal Plan",
        "img" : "https://i.ibb.co/F7CKNrj/lunch1.png" ,
        "price": 17,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 8,
        "category":"lunch",
        "name" : "Fried chicken Bento",
        "img" : "https://i.ibb.co/zGTrGFw/lunch2.png" ,
        "price": 11,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 9,
        "category":"lunch",
        "name" : "Tarang-Rubbed-Salmon        ",
        "img" : "https://i.ibb.co/prFCj77/lunch3.png" ,
        "price": 15,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 10,
        "category":"lunch",
        "name" : "Indian Lunch",
        "img" : "https://i.ibb.co/pX701Bg/lunch4.png" ,
        "price":34,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },    
    {   
        "id" : 11,
        "category":"lunch",
        "name" : "Beef Steak",
        "img" : "https://i.ibb.co/f85H3vz/lunch5.png" ,
        "price": 38,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    }, 
    {   
        "id" : 12,
        "category":"lunch",
        "name" : "Thai Steak",
        "img" : "https://i.ibb.co/Vpf4qPW/lunch6.png" ,
        "price": 42,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 13,
        "category":"dinner",
        "name" : "Pork Tenderloin with Quinoa",
        "img" : "https://i.ibb.co/JB1JctT/dinner4.png" ,
        "price": 29,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 14,
        "category":"dinner",
        "name" : "Bagel And Cream Cheese",
        "img" : "https://i.ibb.co/BsmW04m/dinner1.png" ,
        "price": 17,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 15,
        "category":"dinner",
        "name" : "Salmon with Grapefruit Salad",
        "img" : "https://i.ibb.co/85FdR1G/dinner2.png" ,
        "price":19,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 16,
        "category":"dinner",
        "name" : "Lemony Salmon Piccata",
        "img" : "https://i.ibb.co/7CNNcX6/dinner3.png" ,
        "price": 26,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 17,
        "category":"dinner",
        "name" : "French Fries with Cheese",
        "img" : "https://i.ibb.co/CBYXsWr/dinner5.png",
        "price": 13,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    },
    {   
        "id" : 18,
        "category":"dinner",
        "name" : "Garlic Butter Salmon",
        "img" : "https://i.ibb.co/KV78f0v/dinner6.png",
        "price": 14,
        "shortDescription" : "Quality food at low price.",
        "fullDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
    }
   
]

export default dummyData;