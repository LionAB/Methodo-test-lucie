export  const stringCalculator = (input: string) : number  => {
    if (input === '') {
        return 0;
    }
    let length = input.length;
    if(input.startsWith('//')) {
        const delimiterEndIndex = input.indexOf('\n');
        const delimiter = input.slice(2, delimiterEndIndex);  
        input = input.slice(delimiterEndIndex + 1);  

    
        while (input.includes(delimiter)) {
            input = input.replace(delimiter, ',');
        }

        return input.split(',').reduce((acc, curr) => acc + Number(curr), 0);
    
    }

    if (input.includes(',') || input.includes('\n')) {
        if (input.includes('\n')) {
            input = input.replace('\n', ',');
        }
        return input.split(',').reduce((acc, curr) => acc + Number(curr), 0);
    }
 return Number(input);
}
