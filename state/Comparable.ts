export default interface Comparable<V>{
    /**
     * @return -1 if this arg less then instance,
     *          0 if equals
     *          1 if this arg more then instance,
     */
    compare(arg: V): number
}