module.exports = class {
    constructor(id, user_id, date, date_created, date_last_execution, campaing,
        date_next_execution, state) {
        this.id = id;
        this.user_id = user_id;
        this.date = date;
        this.date_created = date_created;
        this.date_last_execution = date_last_execution;
        this.campaing = campaing;
        this.date_next_execution = date_next_execution;
        this.state = state;
    }
};