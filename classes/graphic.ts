export class GraphicData {
    private months: string[] = ['January', 'February', 'March', 'April'];
    private data: number[] = [0,0,0,0]; 

    constructor(){}

    getGraphicData() {
        return {
            datasets: [
                {
                    data: this.data,
                    label: 'Sales',
                    backgroundColor: 'rgba(255,0,0,0.3)',
                    borderColor: 'red',
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                    fill: 'origin',
                }
            ],
            labels: this.months
        }
    }

    incrementMonthValue(month: string, value: number) {
        month = month.toLowerCase().trim();
        
        for ( let i in this.months ) {
            if ( this.months[i].toLocaleLowerCase() === month ) {
                this.data[i] += value;
            }
        }
        return this.getGraphicData();
    }
} 


