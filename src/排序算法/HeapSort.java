package 排序算法;

import java.util.Arrays;

public class HeapSort extends AbstarctSort {
    public static void main(String[] args) {
        int[] nums = {5, 5, 1, 2, 7, -1, -3, -2};
        Arrays.stream(HeapSort(nums)).forEach(System.out::println);
    }

    public static int[] HeapSort(int[] nums) {
        int length = nums.length;
        // 将数组整理成堆
        heapify(nums);

        // 循环不变量：区间 [0, i] 堆有序
        for (int i = length - 1; i >= 1; ) {
            // 把堆顶元素（当前最大）交换到数组末尾
            swap(nums, 0, i);
            // 逐步减少堆有序的部分
            i--;
            // 下标 0 位置下沉操作，使得区间 [0, i] 堆有序
            siftDown(nums, 0, i);
        }
        return nums;
    }

    /**
     * 将数组整理成堆（堆有序）
     *
     * @param nums
     */
    private static void heapify(int[] nums) {
        int length = nums.length;
        // 只需要从 i = (len - 1) / 2 这个位置开始逐层下移
        for (int i = (length - 1) / 2; i >= 0; i--) {
            siftDown(nums, i, length - 1);
        }
    }

    /**
     * @param nums
     * @param k    当前下沉元素的下标
     * @param end  [0, end] 是 nums 的有效部分
     */
    private static void siftDown(int[] nums, int k, int end) {
        while (2 * k + 1 <= end) {
            int j = 2 * k + 1;
            if (j + 1 <= end && nums[j + 1] > nums[j]) {
                j++;
            }
            if (nums[j] > nums[k]) {
                swap(nums, j, k);
            } else {
                break;
            }
            k = j;
        }
    }
}
