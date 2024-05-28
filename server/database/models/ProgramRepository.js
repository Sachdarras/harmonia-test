const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Appeler le constructeur de la classe parente (AbstractRepository)
    // et passer le nom de la table "program" comme configuration
    super({ table: "program" });
  }

  async readAll() {
    // Exécuter la requête SQL SELECT pour récupérer tous les programmes de la table "program"
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    // Retourner le tableau des programmes
    return rows;
  }
}

module.exports = ProgramRepository;
