package 排序算法;

import java.util.Arrays;
import java.util.Random;

public class QuickSort extends AbstarctSort {
    public static void main(String[] args) {
        int[] nums = {5, 5, 1, 2, 7, -1, -3, -2};
        Arrays.stream(quickSort(nums)).forEach(System.out::println);
    }

    private static final Random RANDOM = new Random();

    public static int[] quickSort(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
        return nums;
    }

    private static void quickSort(int[] nums, int left, int right) {
        if (left >= right) {
            return;
        }
        swap(nums, left, RANDOM.nextInt(right - left + 1) + left);
        //每次取数组的最左边的值为基准值
        int pivot = nums[left];
        int l = left;
        int r = right;

        while (l < r) {
            while (l < r && nums[r] >= pivot) {
                r--;
            }
            while (l < r && nums[l] <= pivot) {
                l++;
            }
            swap(nums, l, r);
        }
        nums[left] = nums[l];
        nums[l] = pivot;
        quickSort(nums, left, r - 1);
        quickSort(nums, r + 1, right);
    }
}
