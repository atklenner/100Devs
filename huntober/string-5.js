const submissions =
  "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood";

function filter(arr) {
  let titles = arr.split(",");
  titles = titles.filter((title) => {
    return !(title.startsWith(" ") || title.endsWith(" "));
  });
  titles = titles.filter((title) => {
    return !title.match(/dog|bark|bone/gi);
  });
  titles = titles.filter((title) => {
    return title.length % 5 !== 0;
  });
  titles = titles.filter((title) => {
    return (title.charCodeAt(0) + title.charCodeAt(title.length - 1)) % 2 !== 0;
  });
  titles = titles.filter((title) => {
    return title[Math.ceil(title.length / 2)] !== "e";
  });
  titles = titles.filter((title) => {
    return (
      title.match(/[a-z]/g).length % 2 === 0 &&
      title.match(/[A-Z]/g).length >= 2 &&
      !title.match(/S/)
    );
  });
  return titles;
}

console.log(filter(submissions));
