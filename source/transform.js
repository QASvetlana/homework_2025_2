const transform = function(obj, transformFn) {
    if (Array.isArray(obj)) {
        return obj.map(item => transform(item, transformFn));
    }
    
    if (typeof obj === 'object' && obj !== null) {
        const result = {};
        
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = transform(obj[key], transformFn);
            }
        }
        
        return result;
    }
    
    return transformFn(obj);
};