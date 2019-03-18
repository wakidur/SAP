const second = ()=> {
    console.log(`2. Second Function: Hello there!`);
}

const first = () => {
    console.log(`1.1 First Function: Hi there!`);
    second();
    console.log('1.2 First Function: The End');
};

first()