
const number = [-1,8,9,1,4,-5,-4,3,2,9];

// mencari angka >= 3

    // Looping biasa menggunakan for
    // console.log(higherThanThree(number));
    function higherThanThree(number){
        const  newNumber = [];
        for (i = 0; i < number.length; i++) {
            if(number[i] >= 3){
                newNumber.push(number[i]);
            }
        }
        return newNumber;
    }

    //  menggunakan filter

    // console.log(higherThanThreeFilter(number));
    
    function higherThanThreeFilter(number){
        const newNumber = number.filter((a) => a>= 3);
        return newNumber;
    }

    // menggunakan map
    // semua angka number dikali dua

    // console.log(multiplyByTwo(number));
    function multiplyByTwo(number){
        const newNumber = number.map(x => x * 2);
        return newNumber;
    }

    // reduce
    // jumlahkan seluruh elemen pada array
    console.log(sumOf(number));
    function sumOf(number){
        const newNumber = number.reduce((accumulator, currentValue)=>
        accumulator + currentValue);
        return newNumber;
    }

    // method chaining
    // cari angka > 5
    // terus klikan 3
    // jumlahkan
    console.log(methodChaining(number));
    function methodChaining(number){
        const newNumber = number.filter((a) => a>= 5).
        map(x => x * 3)
        .reduce((accumulator, currentValue)=>
        accumulator + currentValue);
        return newNumber;
    }
        
