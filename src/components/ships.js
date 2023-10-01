
class Ship {
    constructor(
        id,
        asScheduled,
        berth,
        cargoVolume,
        eta, 
        etd,
        expectedDuration,
        localVoyage,
        ptd,
        predictedDelay,
        predictedDelayBinary,
        predictedDuration,
        service,
        terminal,
        vesselName,
        weather,
    ) {
        this.id = id;
        this.asScheduled = asScheduled;
        this.berth = berth;
        this.cargoVolume = cargoVolume;
        this.eta = eta;
        this.etd = etd;
        this.expectedDuration = expectedDuration;
        this.localVoyage = localVoyage;
        this.ptd = ptd;
        this.predictedDelay = predictedDelay;
        this.predictedDelayBinary = predictedDelayBinary;
        this.predictedDuration = predictedDuration;
        this.service = service;
        this.terminal = terminal;
        this.vesselName = vesselName;
        this.weather = weather;
    }

    
    static builder(input) {
        return new Ship(
            input["Voyage"],
            input["As Scheduled"],
            input["Berth"],
            input["Cargo Volume"],
            input["ETA"],
            input["ETD"],
            input["Expected Duration (hours)"],
            input["Local Voyage"],
            input["PTD"],
            input["Predicted Delay"],
            input["Predicted Delay Binary"],
            input["Predicted Duration (hours)"],
            input["Service"],
            input["Terminal"],
            input["Vessel Name"],
            input["Weather (0=dry,1=wet)"],
        )
    }
}

export default Ship