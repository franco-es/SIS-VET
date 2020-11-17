"use strict";
const mongoose = require("mongoose");

const Schema = mongoose.Schema();

var consultaSchema = {
  fecha: Date,
  contenido: String,
  diagnostico: String,
  tratamiento: String,
  vete: { type: Schema.ObjectId, ref: "Veterinaria" },
};

const consulta = mongoose.model("consulta", consultaSchema);

var vacunaSchema = {
  nombre: String,
  f_aplicacion: String,
  prox_aplicacion: String,
  vete: { type: Schema.ObjectId, ref: "Veterinaria" },
};

const vacuna = mongoose.model("vacuna", vacunaSchema);

var cirugiaSchema = {
  fecha: Date,
  contenido: String,
  vete: { type: Schema.ObjectId, ref: "Veterinaria" },
};

const cirugia = mongoose.model("cirugia", cirugiaSchema);

var petSchema = {
  nombre: String,
  especie: String,
  raza: String,
  color: String,
  f_nacimiento: Date,
  consultas: [consultaSchema],
  vacunas: [vacunaSchema],
  cirugia: [cirugiaSchema],
};

const pet = mongoose.model("mascota", petSchema);

var ownerSchema = {
  nombre: String,
  apellido: String,
  telefono: String,
  direccion: String,
  vete: { type: Schema.ObjectId, ref: "Veterinaria" },
  mascota: [petSchema],
};
module.exports = mongoose.model("owner", ownerSchema);