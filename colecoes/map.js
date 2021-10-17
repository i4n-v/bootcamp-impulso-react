/**
 * Atividade 1: Maps
 * Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
 * 
 * Crie uma função getAdmins que recebe um Map;
 * Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
 * Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuarios que são
 * administradores.
 */

let user = new Map();
user.set('João', 'Admin');
user.set('Leticia', 'Admin');
user.set('Maria', 'User');
user.set('Bruno', 'Admin');
user.set('Elias', 'User');

const getAdmins = map => {
    let admins = [];

	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		}
	}

	return admins;
}

console.log(getAdmins(user));