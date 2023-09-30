
class Ship {
    constructor(id, eta, etd, berth, onTime) {
        this.id = id;
        this.eta = eta;
        this.etd = etd;
        this.berth = berth;
        this.punctuality = onTime;
    }
}

export default Ship