import knex from 'knex';
import Knex from 'knex';

export async function up(knex: Knex){
return knex.schema.createTable('users')
}

export async function down(knex: Knex){

}