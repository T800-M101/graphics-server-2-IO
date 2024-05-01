export class GraphicData {
    private questions: string[] = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];
    private data: number[] = [0, 0, 0, 0];
    private label = 'Questions';

    constructor() { }

    getGraphicData() {
        return {
            labels: this.questions,
            datasets: [
                { data: this.data, label: this.label }
            ]
        }
    }

    incrementQuestionsAnswers(question: number, value: number) { 
        this.data[question] += value;
        return this.getGraphicData();
    }
}




