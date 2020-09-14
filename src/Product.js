class Product {
  validate(arr, obj) {
    ['customer_id', 'product_type', 'domain', 'duration'].map((v) => {
      if (typeof obj[v] === 'undefined' || obj[v].length === 0) {
        throw new Error("Missing " + v);
      }
      return true;
    });

    const domain = obj.domain;
    const type = obj.product_type;

    if (type === 'domain' || type === 'pdomain') {
      if (domain.match(/\.(com|org)$/) === null) {
        throw new Error('Domain must be .com or .org');
      }
    }
    if (type === 'edomain' && domain.match(/\.edu$/) === null) {
      throw new Error('Domain must be .edu');
    }

    if (type === 'hosting' || type === 'email') {
      const matches = arr.filter(v => v.domain === domain && v.product_type.match(/domain/) !== null);
      if (matches.length === 0) {
        throw new Error('Domain registration does not exist');
      }
    }

    if (type.match(/domain/) !== null && obj.duration % 12 > 0) {
      throw new Error('Duration must be multiple of 12');
    }

    if (arr.filter(v => v.domain === domain && v.product_type === type).length > 0) {
      throw new Error('Duplicate product');
    }
  }
}

export default Product;