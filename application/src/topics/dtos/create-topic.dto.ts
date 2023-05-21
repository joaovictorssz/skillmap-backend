export interface CreateTopicDto {
    category: String
    name: String
    img: String
    overview: {
        creators: String,
        creation_date: String,
        price: String,
        resume: String,
        use: String,
        links: String
    };
    roadmap: {
        steps: [{
            name: String

        }]
    }
}