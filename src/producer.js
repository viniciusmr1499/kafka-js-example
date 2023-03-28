const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
})

async function main() {
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: 'mytopic',
        messages: [
            { value: "hello world!!" },
        ],
    })

    await producer.disconnect()
}

main();