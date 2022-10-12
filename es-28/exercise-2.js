const order = {};



let verifyProperty = order.customer?.address?.city ?? 'City is required';
console.log(verifyProperty);


// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

