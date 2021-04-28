module.exports = class Iterate {
    iterator() {
        let iterate = this.getHead;

        return {
            next: () => {
                const node = iterate;

                iterate = node ? iterate.next : this.getHead;

                return {
                    done: node === null,
                    data: node ? node.data : null
                }
            },

            hasNext: () => {
                if (iterate === null) {
                    return false;
                }
                
                return true;
            }
        }
    }

    toArray() {
        let array = [];
        const iterate = this.iterator();

        for (let i = 0; iterate.hasNext(); i++) {
            array[i] = iterate.next().data;
        }

        return array;
    }
}