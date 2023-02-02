let items = [
    { id: 1, name: "벤츠프레스", count: 0 },
    { id: 2, name: "렛풀다운", count: 0 },
    { id: 3, name: "스쿼트", count: 0 },
  ];

  console.log(items);
  console.log(++items[0].count);    //1
  console.log(++items[0].count);    //2
  
  console.log(items[0].count);   //2
  console.log(items[1].count);   //0

  console.log(items[0].name);   //벤치프레스
  console.log(items[1].name);   //렛풀다운
  console.log(items[2].name);   //스쿼트

  console.log(items[0].id); //1
  console.log(items[1].id); //2
  console.log(items[2].id); //3