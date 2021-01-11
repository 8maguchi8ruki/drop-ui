class Drop{
    constructor(nameObj,textArray){
        this.divId = nameObj.divId;
        this.title = nameObj.title;

        this.navId = nameObj.navId;
        this.navClass = nameObj.navClass;

        this.ulId = nameObj.ulId;
        this.ulClass = nameObj.ulClass;
        
        this.liClass = nameObj.liClass;
        this.litext1 = nameObj.litext1;
        this.textArr = textArray;
        this.ButtonClass = nameObj.ButtonClass;
        this.create(this.textArr);
        this.drop();
    }

    create(arr){
        const container = document.querySelector(this.divId);
        const button = document.createElement("button");
        button.classList.add(this.ButtonClass);
        button.textContent = this.title;
        // nav要素作成
        const navDrop = document.createElement("nav");
        navDrop.classList.add(this.navClass);
        navDrop.id = this.navId;
        // ul要素作成
        const ulDrop  = document.createElement("ul");
        ulDrop.classList.add(this.ulClass);
        ulDrop.id = this.ulId;

        navDrop.appendChild(button);
        navDrop.appendChild(ulDrop);
        for(let i=0;i<5;i++){
            // list要素作成
            let liDrop = document.createElement("li");
            liDrop.classList.add(this.liClass);
            liDrop.textContent = arr[i];
            ulDrop.appendChild(liDrop);
        }
        container.appendChild(navDrop);
    }

    drop(){
        const Trigger = document.getElementById(this.navId);
        const Content = document.getElementById(this.ulId);
        let i = 0;
        Trigger.addEventListener("click",()=>{
            Content.classList.add("active");
            i = i + 1;
            console.log(i);
            // ドロップアニメーション
            if(i%2 === 1){
                Content.animate({
                    transform:[
                        "translateY(-250px)",
                        "translateY(0px)"
                    ]
                },
                {
                    duration:1200,
                    easing: "ease"
                })
            }else{
                Content.animate({
                    transform:[
                        "translateY(0px)",
                        "translateY(-250px)"
                    ]
                },
                {
                    duration:1200,
                    easing: "ease"
                })
                setTimeout(() => {
                    Content.classList.remove("active");
                }, 1100);
            }
        })
    }
}

const dropUi = new Drop({
    divId:"#container",
    title:"title",
    navId:"navDrop",
    navClass:"dropTrigger",
    ulId:"ulDrop",
    ulClass:"dropContent",
    liClass:"list",
    ButtonClass:"jsButton"
},
liText =[
    "ああああああ",
    "いいいいいい",
    "うううううう",
    "えええええええ",
    "おおおおおおお"
]);

// const field = new Drop({
//     divId:"#field",
//     title:"title",
//     navId:"navD",
//     navClass:"dropTri",
//     ulId:"ulD",
//     ulClass:"dropCon",
//     liClass:"lis",
//     ButtonClass:"jsbutton"
// },
// liText =[
//     "あああ",y
//     "いいい",
//     "ううう",
//     "えええ",
//     "おおお"
// ]);


