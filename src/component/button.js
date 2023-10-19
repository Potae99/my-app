import React from 'react'

function button() {
    return (
        <div class="relative">
            <button class="voltage-button-button">Button</button>
            <svg class="voltage-button-svg">
            </svg>
            <div class="voltage-button-dots">
                <div class="voltage-button-dot voltage-button-dot-1"></div>
                <div class="voltage-button-dot voltage-button-dot-2"></div>
                <div class="voltage-button-dot voltage-button-dot-3"></div>
                <div class="voltage-button-dot voltage-button-dot-4"></div>
                <div class="voltage-button-dot voltage-button-dot-5"></div>
            </div>
        </div>

    )
}

export default button