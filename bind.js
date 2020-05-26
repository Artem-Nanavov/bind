const context = {
    name: 'Cocojambo'
}

function info ( phone, email ) {
    console.log( `name: ${ this.name }, phone: ${ phone }, email: ${ email }` )
}
// es6
// const bind = ( fn, context, ...rest ) => {
//     return function ( ...args ) {
//         const uniqId = Date.now().toString()
//
//         context[ uniqId ] = fn
//
//         const result = context[ uniqId ]( ...rest.concat( args ) )
//
//         delete context[ uniqId ]
//
//         return result
//     }
// }

//es5
function bind ( fn, context ) {
    var rest = Array.prototype.slice.call( arguments, 2 )

    return function () {
        var arg = Array.prototype.slice.call( arguments )

        return fn.apply( context, arg.concat( rest ) )
    }
}

bind( info, context )(  '123456789', 'email@gmail.com' )
bind( info, context, '123456789' )( 'email@gmail.com' )
bind( info, context, '123456789', 'email@gmail.com' )()





