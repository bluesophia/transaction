import { Promise } from 'es6-promise-polyfill';
import _ from 'underscore';

class DatabaseService {
    constructor() {
        this._getBankName = _.memoize(function(bankId) {
            return window.firebase.database().ref(`banks/${bankId}`).once('value');
        });
    }

    getBanks() {
        return window.firebase.database().ref('banks').once('value')
            .then(snapshot => {
                return snapshot.val();
            });
    }

    getTransactions() {
        return new Promise(resolve => {
            window.firebase.database().ref('transactions').once('value', snapshot => {
                this._resolveBankName(snapshot.val())
                    .then(transactions => {
                        resolve(transactions);
                    });
            });
        });
    }

    listenToChangeTransactions(callback) {
         window.firebase.database().ref('transactions').on('value', snapshot => {
            this._resolveBankName(snapshot.val())
                .then(transactions => {
                    callback(transactions);
                });
        });
    }

    addTransaction({ sum, bankId }) {
        const firebase = window.firebase;
        const databaseName = 'transactions';
        const id = firebase.database().ref(databaseName).push().key;
        const timestamp = Date.now();

        const updates = {
            [`${id}`]: {
                sum,
                bankId,
                timestamp
            }
        };

        return firebase.database().ref(databaseName).update(updates)
            .then(() => {
                return firebase.database().ref(`banks/${bankId}`).once('value');
            })
            .then(snapshot => {
                const { name: bankName } = snapshot.val();
                return {
                    id,
                    sum,
                    bankName,
                    timestamp
                };
            });
    }

    deleteTransaction(key) {
        return window.firebase.database().ref(`transactions/${key}`).remove();
    }

    _resolveBankName(transactions) {
        const requests = [];
        const result = [];
        
        for (let key in transactions) {
            const item = transactions[key];
            result.push({ ...item, id: key });
            requests.push(this._getBankName(item.bankId));
        }

        return Promise.all(requests)
            .then(snapshots => {
                return snapshots.map(item => item.val());
            })
            .then(names => {
                result.forEach((item, index) => {
                    return item.bankName = names[index].name;
                })
                return result;
            });
    }
}

export default new DatabaseService();
