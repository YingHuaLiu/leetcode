package 排序算法;

import java.util.Arrays;

public class MergeSort {
    public static void main(String[] args) {
        int[] nums = {5, 5, 1, 2, 7, -1, -3, -2};
        Arrays.stream(mergeSort(nums)).forEach(System.out::println);
    }

    public static int[] mergeSort(int[] nums) {
        int length = nums.length;
        int[] temp = new int[length];
        mergeSort(nums, 0, length - 1, temp);
        return nums;
    }

    /**
     * 对数组 nums 的子区间 [left, right] 进行归并排序
     */
    private static void mergeSort(int[] nums, int left, int right, int[] temp) {
        if (right <= left) {
            return;
        }

        int mid = (right + left) / 2;

        mergeSort(nums, left, mid, temp);
        mergeSort(nums, mid + 1, right, temp);
        merge(nums, left, mid+1, right, temp);
    }

    /**
     * 合并两个有序数组：先把值复制到临时数组，再合并回去
     * [left, mid] 有序，[mid+1, right] 有序
     */
    private static void merge(int[] nums, int left, int mid, int right, int[] temp) {
        int l = left, r = mid, i = left;
        while (l < mid && r <= right) {
            if (nums[l] < nums[r]) {
                temp[i++] = nums[l++];
            } else {
                temp[i++] = nums[r++];
            }
        }
        while (l < mid) {
            temp[i++] = nums[l++];
        }
        while (r <= right) {
            temp[i++] = nums[r++];
        }
        l = left;
        i = left;
        while (l<=right) {
            nums[l++]=temp[i++];
        }
    }
}
