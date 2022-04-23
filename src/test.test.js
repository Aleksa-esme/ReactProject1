function formatTimeStrings(strings) {
    //first case
    if(strings.length > 1) {
        return `${strings[0]} - ${strings[strings.length - 1]}`;
    }

    //second case
    if (strings.length) {
        return `${strings[0]} - Till tomorrow`;
    }

    //third case
    return `None`;
}


//тестирование каждого из кейсов функции
it('first case', () => {
    const result = formatTimeStrings([1,2,3,4]); //вызвать функцию
    
    //strings[0] - strings[strings.length - 1] - результат который должен получиться(эталон проверки)
    expect(result).toBe('1 - 4');  //сравниваем (toBe)   ожидаемый результат-эталон (expect(result))    c тем что должно получиться (первый элемент массива-последний элемент массива). toBe-подходит для примитивных результатов
});

it('second case', () => {
    const result = formatTimeStrings([1]);
    
    expect(result).toBe('1 - Till tomorrow');
}); 

it('third case', () => {
    const result = formatTimeStrings([]);
    
    expect(result).toBe('None');
});


//для объединения нескольких тестов с одной логикой
describe('formatTimeStrings', () => {
    it('first case', () => {
        const result = formatTimeStrings([1,2,3,4]);
        expect(result).toBe('1 - 4');
    });
    
    it('second case', () => {
        const result = formatTimeStrings([1]);       
        expect(result).toBe('1 - Till tomorrow');
    }); 
    
    it('third case', () => {
        const result = formatTimeStrings([]);        
        expect(result).toBe('None');
    });
});

//npm run test - запуск всех тестов в директории, результат в консоли